package com.guidewire._generated.security;

import com.guidewire.pc.domain.job.impl.JobProducerCodePermissionHandler;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import typekey.ProducerStatus;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class IssuancePermKeys {
  public static final JobProducerCodePermissionHandler VIEW = new JobProducerCodePermissionHandler("view", "Issuance", "Permission to view an issuance", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("viewissuance"));
  
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.Issuance.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("createissuance").withDescription("Permission to create an issuance job").build());
  
  public static final JobProducerCodePermissionHandler ADVANCE = new JobProducerCodePermissionHandler("advance", "Issuance", "Permission to advance an issuance", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("advanceissuance"));
  
  public static final JobProducerCodePermissionHandler EDIT = new JobProducerCodePermissionHandler("edit", "Issuance", "Permission to edit an issuance", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("editissuance"));
  
  public static final JobProducerCodePermissionHandler QUOTE = new JobProducerCodePermissionHandler("quote", "Issuance", "Permission to quote an issuance", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("quote"));
  
  public static final JobProducerCodePermissionHandler BIND = new JobProducerCodePermissionHandler("bind", "Issuance", "Permission to bind an issuance", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("bindissuance"));
  
  public static final JobProducerCodePermissionHandler ISSUE = new JobProducerCodePermissionHandler("issue", "Issuance", "Permission to issue an issuance", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("issue"));
  
  public static final JobProducerCodePermissionHandler WITHDRAW = new JobProducerCodePermissionHandler("withdraw", "Issuance", "Permission to withdraw an issuance", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("withdraw"));
  
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
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}