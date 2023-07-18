package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPCovBuildingCost.eti;BOPCovBuildingCost.eix;BOPCovBuildingCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPCovBuildingCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPCovBuildingCostVersionList {
  public BOPCovBuildingCostVersionListImpl(entity.BOPCovBuildingCost base)  {
    super(base);
  }
  
  public BOPCovBuildingCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPCovBuildingCost AsOf(java.util.Date date) {
    return (entity.BOPCovBuildingCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPCovBuildingCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BOPTransaction bean) {
    addToArray(entity.BOPCovBuildingCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPCovBuildingCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BOPCovBuildingCost.TRANSACTIONS_PROP.get());
  }
  
  
}