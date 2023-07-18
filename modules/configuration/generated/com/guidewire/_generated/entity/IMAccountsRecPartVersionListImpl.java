package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPart.eti;IMAccountsRecPart.eix;IMAccountsRecPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMAccountsRecPartVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMAccountsRecPartVersionList {
  public IMAccountsRecPartVersionListImpl(entity.IMAccountsRecPart base)  {
    super(base);
  }
  
  public IMAccountsRecPartVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMAccountsRecPart AsOf(java.util.Date date) {
    return (entity.IMAccountsRecPart)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartCond> IMAccountsRecPartConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartCost> IMAccountsRecPartCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartCov> IMAccountsRecPartCovsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCOVS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartExcl> IMAccountsRecPartExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPart.IMACCOUNTSRECPARTEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsReceivable> IMAccountsReceivablesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPart.IMACCOUNTSRECEIVABLES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMExcludedAccount> IMExcludedAccountsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPart.IMEXCLUDEDACCOUNTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToIMAccountsRecPartConditions(entity.IMAccountsRecPartCond bean) {
    addToArray(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMAccountsRecPartCosts(entity.IMAccountsRecPartCost bean) {
    addToArray(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMAccountsRecPartCovs(entity.IMAccountsRecPartCov bean) {
    addToArray(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCOVS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMAccountsRecPartExclusions(entity.IMAccountsRecPartExcl bean) {
    addToArray(entity.IMAccountsRecPart.IMACCOUNTSRECPARTEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMAccountsReceivables(entity.IMAccountsReceivable bean) {
    addToArray(entity.IMAccountsRecPart.IMACCOUNTSRECEIVABLES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMExcludedAccounts(entity.IMExcludedAccount bean) {
    addToArray(entity.IMAccountsRecPart.IMEXCLUDEDACCOUNTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPart> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMAccountsRecPartCondVersionList> getIMAccountsRecPartConditions() {
    return (java.util.List)getArray(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMAccountsRecPartCostVersionList> getIMAccountsRecPartCosts() {
    return (java.util.List)getArray(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMAccountsRecPartCovVersionList> getIMAccountsRecPartCovs() {
    return (java.util.List)getArray(entity.IMAccountsRecPart.IMACCOUNTSRECPARTCOVS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMAccountsRecPartExclVersionList> getIMAccountsRecPartExclusions() {
    return (java.util.List)getArray(entity.IMAccountsRecPart.IMACCOUNTSRECPARTEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMAccountsReceivableVersionList> getIMAccountsReceivables() {
    return (java.util.List)getArray(entity.IMAccountsRecPart.IMACCOUNTSRECEIVABLES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMExcludedAccountVersionList> getIMExcludedAccounts() {
    return (java.util.List)getArray(entity.IMAccountsRecPart.IMEXCLUDEDACCOUNTS_PROP.get());
  }
  
  
}