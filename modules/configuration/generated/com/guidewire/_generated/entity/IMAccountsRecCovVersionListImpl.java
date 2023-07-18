package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecCov.eti;IMAccountsRecCov.eix;IMAccountsRecCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMAccountsRecCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMAccountsRecCovVersionList {
  public IMAccountsRecCovVersionListImpl(entity.IMAccountsRecCov base)  {
    super(base);
  }
  
  public IMAccountsRecCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMAccountsRecCov AsOf(java.util.Date date) {
    return (entity.IMAccountsRecCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.IMAccountsRecCovCost bean) {
    addToArray(entity.IMAccountsRecCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMAccountsRecCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.IMAccountsRecCov.COSTS_PROP.get());
  }
  
  
}