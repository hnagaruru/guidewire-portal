package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCoveredEmployee.eti;WCCoveredEmployee.eix;WCCoveredEmployee.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCCoveredEmployeeVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCCoveredEmployeeVersionList {
  public WCCoveredEmployeeVersionListImpl(entity.WCCoveredEmployee base)  {
    super(base);
  }
  
  public WCCoveredEmployeeVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCCoveredEmployee AsOf(java.util.Date date) {
    return (entity.WCCoveredEmployee)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCovEmpCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCCoveredEmployee.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.WCCovEmpCost bean) {
    addToArray(entity.WCCoveredEmployee.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCoveredEmployee> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCCovEmpCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.WCCoveredEmployee.COSTS_PROP.get());
  }
  
  
}