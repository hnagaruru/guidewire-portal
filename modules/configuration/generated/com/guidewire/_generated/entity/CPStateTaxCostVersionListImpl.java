package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPStateTaxCost.eti;CPStateTaxCost.eix;CPStateTaxCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPStateTaxCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPStateTaxCostVersionList {
  public CPStateTaxCostVersionListImpl(entity.CPStateTaxCost base)  {
    super(base);
  }
  
  public CPStateTaxCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPStateTaxCost AsOf(java.util.Date date) {
    return (entity.CPStateTaxCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPStateTaxCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.CPTransaction bean) {
    addToArray(entity.CPStateTaxCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPStateTaxCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.CPStateTaxCost.TRANSACTIONS_PROP.get());
  }
  
  
}