package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompCov.eti;WorkersCompCov.eix;WorkersCompCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WorkersCompCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WorkersCompCovVersionList {
  public WorkersCompCovVersionListImpl(entity.WorkersCompCov base)  {
    super(base);
  }
  
  public WorkersCompCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WorkersCompCov AsOf(java.util.Date date) {
    return (entity.WorkersCompCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCovEmpCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.WCCovEmpCost bean) {
    addToArray(entity.WorkersCompCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WorkersCompCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCCovEmpCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.WorkersCompCov.COSTS_PROP.get());
  }
  
  
}