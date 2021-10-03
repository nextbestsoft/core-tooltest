#!/usr/bin/bash

FINGER_CMD="/usr/bin/finger"
MYCOUNT=""

USERNAME=$1

echo "1) Display result finger"
${FINGER_CMD} $USERNAME

echo "2) Display result count"
echo "TODO ..."
DEFAULT_SERVER=2

####################################################
echo -n "3) Select 1 or 2 or 3 [${DEFAULT_SERVER}] "
read server

if [ .${server} = . ]
then
    server=${DEFAULT_SERVER}
fi
    until [ ${server} = "1" -o ${server} = "2" -o ${server} = "3" ]
    do
	echo "3) Select 1 or 2 or 3 [${DEFAULT_SERVER}] "
        read server
            if [ .${server} = . ]
            then
                server=${DEFAULT_SERVER}
            fi
    done
####################################################

####################################################
DEFAULT_QUOTA_SIZE=1
echo -n "4) Select 1 or 2 or 3 quota size [2] "
read quota_size

if [ .${quota_size} = . ]
then
    quota_size=${DEFAULT_SERVER}
fi

until [ ${quota_size} = "1" -o ${quota_size} = "2" -o $quota_size} = "3" ]
do
        echo "3) Select 1 or 2 or 3 [${DEFAULT_SERVER}] "
        read quota_size
            if [ .${quota_size} = . ]
            then
                server=${DEFAULT_SERVER}
            fi
done

####################################################
echo "5) Setting password "
echo -n "Input password: "
read password
echo -n "Input confirm password: "
read conf_password

until [ ${password} == ${conf_password} ]
do
    echo "No match password.Please input again."
    echo -n "Input password: "
    read password
    echo -n "Input confirm password: "
    read conf_password
done

####################################################
echo "6) Adding info"
echo "Username: ${USERNAME}"
echo "Server: ${server}"
echo "Quota: ${quota_size}"
echo "Password: ${password}"
echo ""

useradd -m -s /bin/bash -d /home/${USERNAME} ${USERNAME}

expect -c "
spawn passwd ${USERNAME}
expect \"New password:\"
send -- \"${password}\n\"
expect \"Retype new password:\"
send -- \"${password}\n\"
expect \"passwd: password updated successfully\"
send -- \"exit\n\"
"
echo "7) Added OK"
