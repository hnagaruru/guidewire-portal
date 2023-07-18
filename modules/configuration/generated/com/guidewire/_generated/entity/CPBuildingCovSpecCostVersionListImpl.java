package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCovSpecCost.eti;CPBuildingCovSpecCost.eix;CPBuildingCovSpecCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPBuildingCovSpecCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPBuildingCovSpecCostVersionList {
  public CPBuildingCovSpecCostVersionListImpl(entity.CPBuildingCovSpecCost base)  {
    super(base);
  }
  
  public CPBuildingCovSpecCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPBuildingCovSpecCost AsOf(java.util.Date date) {
    return (entity.CPBuildingCovSpecCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPBuildingCovSpecCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.CPTransaction bean) {
    addToArray(entity.CPBuildingCovSpecCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuildingCovSpecCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.CPBuildingCovSpecCost.TRANSACTIONS_PROP.get());
  }
  
  
}