package com.guidewire._generated.security;

import com.guidewire.pc.domain.job.impl.JobProducerCodePermissionHandler;
import com.guidewire.pl.system.security.PermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import typekey.ProducerStatus;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class JobPermKeys {
  public static final JobProducerCodePermissionHandler VIEW = new JobProducerCodePermissionHandler("view", "Job", "Permission to view jobs", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("viewpolicyfile"));
  
  public static final JobProducerCodePermissionHandler IMPORTPOLICYDATA = new JobProducerCodePermissionHandler("importPolicyData", "Job", "Permission to copy entities from one Policy to another", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("copypolicydata"));
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(IMPORTPOLICYDATA);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}