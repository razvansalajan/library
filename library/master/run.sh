#!/bin/bash

curr=$(pwd)
echo 'changing to ~/workspace/master/tehnologii_si_platforme_java_pentru_aplicatii_distribuite/team_project/library/library/web/src/main/webapp'
cd ~/workspace/master/tehnologii_si_platforme_java_pentru_aplicatii_distribuite/team_project/library/library/web/src/main/webapp
echo 'current: '$(pwd) 
echo 'run gulp ts2js..'
gulp ts2js

echo 'changing to ~/workspace/master/tehnologii_si_platforme_java_pentru_aplicatii_distribuite/team_project/library/library/master'
cd ~/workspace/master/tehnologii_si_platforme_java_pentru_aplicatii_distribuite/team_project/library/library/master
echo 'current: '$(pwd) 
echo 'run gradle clean build..'
gradle clean build

echo 'copy to glassfish....'
cp build/libs/master_library.ear ~/workspace/master/tehnologii_si_platforme_java_pentru_aplicatii_distribuite/application_servers/glassfish4.0/glassfish/domains/domain1/autodeploy/

cd $curr