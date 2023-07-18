package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCovCost.eti;APDRiskCovCost.eix;APDRiskCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskCovCostVersionList {
  public APDRiskCovCostVersionListImpl(entity.APDRiskCovCost base)  {
    super(base);
  }
  
  public APDRiskCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskCovCost AsOf(java.util.Date date) {
    return (entity.APDRiskCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.APDTransaction bean) {
    addToArray(entity.APDRiskCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.APDRiskCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}