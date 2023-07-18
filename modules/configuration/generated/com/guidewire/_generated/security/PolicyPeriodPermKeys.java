package com.guidewire._generated.security;

import com.guidewire.pc.domain.policy.period.impl.PolicyPeriodProducerCodePermissionHandler;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import typekey.ProducerStatus;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class PolicyPeriodPermKeys {
  public static final PolicyPeriodProducerCodePermissionHandler VIEW = new PolicyPeriodProducerCodePermissionHandler("view", "Permission to view the policy file", true, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited"), typekey.ProducerStatus.getTypeKey("Suspended"), typekey.ProducerStatus.getTypeKey("Terminating")}, typekey.SystemPermissionType.getTypeKey("viewpolicyfile"));
  
  public static final PolicyPeriodProducerCodePermissionHandler BIND = new PolicyPeriodProducerCodePermissionHandler("bind", "Permission to bind a policy", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("bindcancellation"), typekey.SystemPermissionType.getTypeKey("bindreinstate"), typekey.SystemPermissionType.getTypeKey("bindrewrite"), typekey.SystemPermissionType.getTypeKey("bindrewrnewacct"), typekey.SystemPermissionType.getTypeKey("bindsubmission"), typekey.SystemPermissionType.getTypeKey("bindpolchange"));
  
  public static final StaticPermissionKey RESETQUOTINGLOCK = new StaticPermissionKey("resetquotinglock", entity.PolicyPeriod.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("resetquotinglock").withDescription("Permission to reset the lock of a quoting policy.").build());
  
  public static final PolicyPeriodProducerCodePermissionHandler PRODUCEROFSERVICEONLYVIEW = new PolicyPeriodProducerCodePermissionHandler("producerOfServiceOnlyView", "Permission to view the policy file as active producer of service", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("viewpolicyfile"));
  
  public static final PolicyPeriodProducerCodePermissionHandler ISSUE = new PolicyPeriodProducerCodePermissionHandler("issue", "Permission to issue a policy", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("issue"));
  
  public static final PolicyPeriodProducerCodePermissionHandler CANCEL = new PolicyPeriodProducerCodePermissionHandler("cancel", "Permission to cancel a policy", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("createcancellation"));
  
  public static final PolicyPeriodProducerCodePermissionHandler RENEW = new PolicyPeriodProducerCodePermissionHandler("renew", "Permission to renew a policy", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("createrenewal"));
  
  public static final PolicyPeriodProducerCodePermissionHandler REWRITE = new PolicyPeriodProducerCodePermissionHandler("rewrite", "Permission to rewrite a policy", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("createrewrite"));
  
  public static final PolicyPeriodProducerCodePermissionHandler REWRITENEWACCOUNT = new PolicyPeriodProducerCodePermissionHandler("rewritenewaccount", "Permission to rewrite a policy to a new account", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("createrewrnewacct"));
  
  public static final PolicyPeriodProducerCodePermissionHandler CHANGE = new PolicyPeriodProducerCodePermissionHandler("change", "Permission to change a policy", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("createpolchange"));
  
  public static final PolicyPeriodProducerCodePermissionHandler REINSTATE = new PolicyPeriodProducerCodePermissionHandler("reinstate", "Permission to reinstate a cancelled policy", false, new ProducerStatus[]{typekey.ProducerStatus.getTypeKey("Limited")}, typekey.SystemPermissionType.getTypeKey("createreinstate"));
  
  public static final PolicyPeriodProducerCodePermissionHandler AUDIT = new PolicyPeriodProducerCodePermissionHandler("audit", "Permission to audit a policy", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("editaudit"), typekey.SystemPermissionType.getTypeKey("waiveaudit"), typekey.SystemPermissionType.getTypeKey("completeaudit"));
  
  public static final PolicyPeriodProducerCodePermissionHandler SPLITPOLICY = new PolicyPeriodProducerCodePermissionHandler("splitpolicy", "Permission to divide (e.g. split or spin) policies into other submissions", false, new ProducerStatus[]{}, typekey.SystemPermissionType.getTypeKey("splitpolicy"));
  
  public static final StaticPermissionKey OVERRIDEBILLING = new StaticPermissionKey("overridebilling", entity.PolicyPeriod.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("overridebilling").withDescription("Permission to override billing behaviors").build());
  
  public static final StaticPermissionKey RESTOREFROMARCHIVE = new StaticPermissionKey("restorefromarchive", entity.PolicyPeriod.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("restorefromarchive").withDescription("Permission to retrieve a policy period from the archive.").build());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(BIND);
    permissionKeys.add(RESETQUOTINGLOCK);
    permissionKeys.add(PRODUCEROFSERVICEONLYVIEW);
    permissionKeys.add(ISSUE);
    permissionKeys.add(CANCEL);
    permissionKeys.add(RENEW);
    permissionKeys.add(REWRITE);
    permissionKeys.add(REWRITENEWACCOUNT);
    permissionKeys.add(CHANGE);
    permissionKeys.add(REINSTATE);
    permissionKeys.add(AUDIT);
    permissionKeys.add(SPLITPOLICY);
    permissionKeys.add(OVERRIDEBILLING);
    permissionKeys.add(RESTOREFROMARCHIVE);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}