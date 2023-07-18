package com.guidewire._generated.security;

import com.guidewire.pc.domain.job.impl.JobProducerCodePermissionHandler;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import typekey.ProducerStatus;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class SubmissionPermKeys {
  public static final JobProducerCodePermissionHandler VIEW = new JobProducerCodePermissionHandler("view", "Submission", "Permission to view a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("viewsubmission"));
  
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.Submission.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("createsubmission").withDescription("Permission to create a submission job").build());
  
  public static final JobProducerCodePermissionHandler ADVANCE = new JobProducerCodePermissionHandler("advance", "Submission", "Permission to advance a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("advancesubmission"), typekey.SystemPermissionType.getTypeKey("reviewsubmission"));
  
  public static final JobProducerCodePermissionHandler EDIT = new JobProducerCodePermissionHandler("edit", "Submission", "Permission to edit a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("editsubmission"), typekey.SystemPermissionType.getTypeKey("reviewsubmission"));
  
  public static final JobProducerCodePermissionHandler NOTTAKEN = new JobProducerCodePermissionHandler("nottaken", "Submission", "Permission to set not-taken on a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("nottakensubmission"));
  
  public static final JobProducerCodePermissionHandler QUOTE = new JobProducerCodePermissionHandler("quote", "Submission", "Permission to quote a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("quote"));
  
  public static final JobProducerCodePermissionHandler DECLINE = new JobProducerCodePermissionHandler("decline", "Submission", "Permission to decline a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("declinesubmission"));
  
  public static final JobProducerCodePermissionHandler BIND = new JobProducerCodePermissionHandler("bind", "Submission", "Permission to bind a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("bindsubmission"));
  
  public static final JobProducerCodePermissionHandler ISSUE = new JobProducerCodePermissionHandler("issue", "Submission", "Permission to issue a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("issue"));
  
  public static final JobProducerCodePermissionHandler WITHDRAW = new JobProducerCodePermissionHandler("withdraw", "Submission", "Permission to withdraw a submission", new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("withdraw"));
  
  public static final JobProducerCodePermissionHandler REVIEW = new JobProducerCodePermissionHandler("review", "Submission", "Permission to review a submission", new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("reviewsubmission"));
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(CREATE);
    permissionKeys.add(ADVANCE);
    permissionKeys.add(EDIT);
    permissionKeys.add(NOTTAKEN);
    permissionKeys.add(QUOTE);
    permissionKeys.add(DECLINE);
    permissionKeys.add(BIND);
    permissionKeys.add(ISSUE);
    permissionKeys.add(WITHDRAW);
    permissionKeys.add(REVIEW);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}