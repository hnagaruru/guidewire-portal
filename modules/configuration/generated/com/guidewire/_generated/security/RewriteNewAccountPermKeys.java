package com.guidewire._generated.security;

import com.guidewire.pc.domain.job.impl.JobProducerCodePermissionHandler;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import typekey.ProducerStatus;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class RewriteNewAccountPermKeys {
  public static final JobProducerCodePermissionHandler VIEW = new JobProducerCodePermissionHandler("view", "RewriteNewAccount", "Permission to view the rewrite new account wizard pages", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("viewrewrnewacct"));
  
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.RewriteNewAccount.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("createrewrnewacct").withDescription("Permission to create a rewrite new account job").build());
  
  public static final JobProducerCodePermissionHandler ADVANCE = new JobProducerCodePermissionHandler("advance", "RewriteNewAccount", "Permission to advance a rewrite new account", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("advancerewrnewacct"));
  
  public static final JobProducerCodePermissionHandler EDIT = new JobProducerCodePermissionHandler("edit", "RewriteNewAccount", "Permission to edit a rewrite new account", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("editrewrnewacct"));
  
  public static final JobProducerCodePermissionHandler BIND = new JobProducerCodePermissionHandler("bind", "RewriteNewAccount", "Permission to bind a rewrite new account", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("bindrewrnewacct"));
  
  public static final JobProducerCodePermissionHandler QUOTE = new JobProducerCodePermissionHandler("quote", "RewriteNewAccount", "Permission to quote a rewrite new account", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("quote"));
  
  public static final JobProducerCodePermissionHandler ISSUE = new JobProducerCodePermissionHandler("issue", "RewriteNewAccount", "Permission to issue a rewrite new account", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("issue"));
  
  public static final JobProducerCodePermissionHandler WITHDRAW = new JobProducerCodePermissionHandler("withdraw", "RewriteNewAccount", "Permission to withdraw a rewrite new account", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("withdraw"));
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(CREATE);
    permissionKeys.add(ADVANCE);
    permissionKeys.add(EDIT);
    permissionKeys.add(BIND);
    permissionKeys.add(QUOTE);
    permissionKeys.add(ISSUE);
    permissionKeys.add(WITHDRAW);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}