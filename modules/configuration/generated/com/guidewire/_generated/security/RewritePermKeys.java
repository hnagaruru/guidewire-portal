package com.guidewire._generated.security;

import com.guidewire.pc.domain.job.impl.JobProducerCodePermissionHandler;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import typekey.ProducerStatus;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class RewritePermKeys {
  public static final JobProducerCodePermissionHandler VIEW = new JobProducerCodePermissionHandler("view", "Rewrite", "Permission to view the rewrite wizard pages", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("viewrewrite"));
  
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.Rewrite.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("createrewrite", "reviewrewrite").withDescription("Permission to create a rewrite job").build());
  
  public static final JobProducerCodePermissionHandler ADVANCE = new JobProducerCodePermissionHandler("advance", "Rewrite", "Permission to advance a rewrite", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("advancerewrite"));
  
  public static final JobProducerCodePermissionHandler EDIT = new JobProducerCodePermissionHandler("edit", "Rewrite", "Permission to edit a rewrite", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("editrewrite"));
  
  public static final JobProducerCodePermissionHandler BIND = new JobProducerCodePermissionHandler("bind", "Rewrite", "Permission to bind a rewrite", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("bindrewrite"));
  
  public static final JobProducerCodePermissionHandler QUOTE = new JobProducerCodePermissionHandler("quote", "Rewrite", "Permission to quote a rewrite", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("quote"));
  
  public static final JobProducerCodePermissionHandler ISSUE = new JobProducerCodePermissionHandler("issue", "Rewrite", "Permission to issue a rewrite", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("issue"));
  
  public static final JobProducerCodePermissionHandler WITHDRAW = new JobProducerCodePermissionHandler("withdraw", "Rewrite", "Permission to withdraw a rewrite", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("withdraw"));
  
  public static final JobProducerCodePermissionHandler REVIEW = new JobProducerCodePermissionHandler("review", "Rewrite", "Permission to review a rewrite", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("reviewrewrite"));
  
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
    permissionKeys.add(REVIEW);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}