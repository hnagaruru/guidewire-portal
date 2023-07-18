package com.guidewire._generated.security;

import com.guidewire.pc.domain.account.AccountProducerCodePermissionHandler;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import typekey.ProducerStatus;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class AccountPermKeys {
  public static final AccountProducerCodePermissionHandler CREATEFORPRODUCERCODE = new AccountProducerCodePermissionHandler("createForProducerCode", "Permission to create account for a particular producer code", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("accountcreate"));
  
  public static final AccountProducerCodePermissionHandler NEWSUBMISSION = new AccountProducerCodePermissionHandler("newSubmission", "Permission to create a new submission on account", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("createsubmission"));
  
  public static final AccountProducerCodePermissionHandler VIEW = new AccountProducerCodePermissionHandler("view", "Permission to view an account", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited"), typekey.ProducerStatus.getTypeKey("Suspended"), typekey.ProducerStatus.getTypeKey("Terminating")}, typekey.SystemPermissionType.getTypeKey("viewaccount"));
  
  public static final AccountProducerCodePermissionHandler VIEWSUBMISSIONGROUP = new AccountProducerCodePermissionHandler("viewSubmissionGroup", "Permission to view a submission group", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("viewaccount"));
  
  public static final AccountProducerCodePermissionHandler VIEWRENEWALGROUP = new AccountProducerCodePermissionHandler("viewRenewalGroup", "Permission to view a renewal group", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("viewaccount"));
  
  public static final AccountProducerCodePermissionHandler WITHDRAW = new AccountProducerCodePermissionHandler("withdraw", "Permission to withdraw an unused account", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("accountwithdraw"));
  
  public static final AccountProducerCodePermissionHandler REOPEN = new AccountProducerCodePermissionHandler("reopen", "Permission to reopen a withdrawn account", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("accountreopen"));
  
  public static final AccountProducerCodePermissionHandler MOVEPOLICIES = new AccountProducerCodePermissionHandler("movePolicies", "Permission to move policies between accounts", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("accountmovepolicies"));
  
  public static final AccountProducerCodePermissionHandler MERGEACCOUNTS = new AccountProducerCodePermissionHandler("mergeAccounts", "Permission to merge an account into the current account", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("mergeaccounts"));
  
  public static final AccountProducerCodePermissionHandler REWRITEPOLICIES = new AccountProducerCodePermissionHandler("rewritePolicies", "Permission to rewrite policies between accounts", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("accountrewritepolicies"));
  
  public static final AccountProducerCodePermissionHandler EDIT = new AccountProducerCodePermissionHandler("edit", "Permission to edit an account", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("editaccountsummary"));
  
  public static final StaticPermissionKey VIEWBILLING = new StaticPermissionKey("viewBilling", entity.Account.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("accountbilling").withDescription("Permission to view an account's billing information").build());
  
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.Account.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("accountcreate").withDescription("Permission to create an account").build());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(CREATEFORPRODUCERCODE);
    permissionKeys.add(NEWSUBMISSION);
    permissionKeys.add(VIEW);
    permissionKeys.add(VIEWSUBMISSIONGROUP);
    permissionKeys.add(VIEWRENEWALGROUP);
    permissionKeys.add(WITHDRAW);
    permissionKeys.add(REOPEN);
    permissionKeys.add(MOVEPOLICIES);
    permissionKeys.add(MERGEACCOUNTS);
    permissionKeys.add(REWRITEPOLICIES);
    permissionKeys.add(EDIT);
    permissionKeys.add(VIEWBILLING);
    permissionKeys.add(CREATE);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}