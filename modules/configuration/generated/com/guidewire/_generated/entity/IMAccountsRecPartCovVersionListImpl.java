package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartCov.eti;IMAccountsRecPartCov.eix;IMAccountsRecPartCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMAccountsRecPartCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMAccountsRecPartCovVersionList {
  public IMAccountsRecPartCovVersionListImpl(entity.IMAccountsRecPartCov base)  {
    super(base);
  }
  
  public IMAccountsRecPartCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMAccountsRecPartCov AsOf(java.util.Date date) {
    return (entity.IMAccountsRecPartCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPartCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.IMAccountsRecPartCovCost bean) {
    addToArray(entity.IMAccountsRecPartCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMAccountsRecPartCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.IMAccountsRecPartCov.COSTS_PROP.get());
  }
  
  
}