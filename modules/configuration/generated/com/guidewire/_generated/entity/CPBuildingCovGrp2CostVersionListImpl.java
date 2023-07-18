package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCovGrp2Cost.eti;CPBuildingCovGrp2Cost.eix;CPBuildingCovGrp2Cost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPBuildingCovGrp2CostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPBuildingCovGrp2CostVersionList {
  public CPBuildingCovGrp2CostVersionListImpl(entity.CPBuildingCovGrp2Cost base)  {
    super(base);
  }
  
  public CPBuildingCovGrp2CostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPBuildingCovGrp2Cost AsOf(java.util.Date date) {
    return (entity.CPBuildingCovGrp2Cost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPBuildingCovGrp2Cost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.CPTransaction bean) {
    addToArray(entity.CPBuildingCovGrp2Cost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuildingCovGrp2Cost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.CPBuildingCovGrp2Cost.TRANSACTIONS_PROP.get());
  }
  
  
}