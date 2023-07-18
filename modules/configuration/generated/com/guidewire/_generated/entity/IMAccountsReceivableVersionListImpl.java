package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsReceivable.eti;IMAccountsReceivable.eix;IMAccountsReceivable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMAccountsReceivableVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMAccountsReceivableVersionList {
  public IMAccountsReceivableVersionListImpl(entity.IMAccountsReceivable base)  {
    super(base);
  }
  
  public IMAccountsReceivableVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMAccountsReceivable AsOf(java.util.Date date) {
    return (entity.IMAccountsReceivable)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsReceivable.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.IMAccountsRecCov bean) {
    addToArray(entity.IMAccountsReceivable.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsReceivable> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMAccountsRecCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.IMAccountsReceivable.COVERAGES_PROP.get());
  }
  
  
}