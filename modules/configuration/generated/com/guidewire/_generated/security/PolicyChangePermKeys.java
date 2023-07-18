package com.guidewire._generated.security;

import com.guidewire.pc.domain.job.impl.JobProducerCodePermissionHandler;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import typekey.ProducerStatus;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class PolicyChangePermKeys {
  public static final JobProducerCodePermissionHandler VIEW = new JobProducerCodePermissionHandler("view", "PolicyChange", "Permission to view a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("viewpolchange"));
  
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.PolicyChange.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("createpolchange").withDescription("Permission to create a policy change job").build());
  
  public static final JobProducerCodePermissionHandler ADVANCE = new JobProducerCodePermissionHandler("advance", "PolicyChange", "Permission to advance a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("advancepolchange"));
  
  public static final JobProducerCodePermissionHandler EDIT = new JobProducerCodePermissionHandler("edit", "PolicyChange", "Permission to edit a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("editpolchange"));
  
  public static final JobProducerCodePermissionHandler QUOTE = new JobProducerCodePermissionHandler("quote", "PolicyChange", "Permission to quote a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("quote"));
  
  public static final JobProducerCodePermissionHandler BIND = new JobProducerCodePermissionHandler("bind", "PolicyChange", "Permission to bind a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("bindpolchange"));
  
  public static final JobProducerCodePermissionHandler ISSUE = new JobProducerCodePermissionHandler("issue", "PolicyChange", "Permission to issue a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("issue"));
  
  public static final JobProducerCodePermissionHandler WITHDRAW = new JobProducerCodePermissionHandler("withdraw", "PolicyChange", "Permission to withdraw a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("withdraw"));
  
  public static final JobProducerCodePermissionHandler REVIEW = new JobProducerCodePermissionHandler("review", "PolicyChange", "Permission to review a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("reviewpolchange"));
  
  public static final JobProducerCodePermissionHandler DECLINE = new JobProducerCodePermissionHandler("decline", "PolicyChange", "Permission to review a policy change", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("declinepolchange"));
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(CREATE);
    permissionKeys.add(ADVANCE);
    permissionKeys.add(EDIT);
    permissionKeys.add(QUOTE);
    permissionKeys.add(BIND);
    permissionKeys.add(ISSUE);
    permissionKeys.add(WITHDRAW);
    permissionKeys.add(REVIEW);
    permissionKeys.add(DECLINE);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}