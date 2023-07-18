package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCost.eti;APDRiskCost.eix;APDRiskCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskCostVersionList {
  public APDRiskCostVersionListImpl(entity.APDRiskCost base)  {
    super(base);
  }
  
  public APDRiskCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskCost AsOf(java.util.Date date) {
    return (entity.APDRiskCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.APDTransaction bean) {
    addToArray(entity.APDRiskCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.APDRiskCost.TRANSACTIONS_PROP.get());
  }
  
  
}