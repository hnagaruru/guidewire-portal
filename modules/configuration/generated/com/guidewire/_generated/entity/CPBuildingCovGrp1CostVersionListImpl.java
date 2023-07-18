package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCovGrp1Cost.eti;CPBuildingCovGrp1Cost.eix;CPBuildingCovGrp1Cost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPBuildingCovGrp1CostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPBuildingCovGrp1CostVersionList {
  public CPBuildingCovGrp1CostVersionListImpl(entity.CPBuildingCovGrp1Cost base)  {
    super(base);
  }
  
  public CPBuildingCovGrp1CostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPBuildingCovGrp1Cost AsOf(java.util.Date date) {
    return (entity.CPBuildingCovGrp1Cost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPBuildingCovGrp1Cost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.CPTransaction bean) {
    addToArray(entity.CPBuildingCovGrp1Cost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuildingCovGrp1Cost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.CPBuildingCovGrp1Cost.TRANSACTIONS_PROP.get());
  }
  
  
}