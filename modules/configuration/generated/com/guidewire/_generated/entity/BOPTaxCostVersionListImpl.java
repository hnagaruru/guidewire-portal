package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPTaxCost.eti;BOPTaxCost.eix;BOPTaxCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPTaxCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPTaxCostVersionList {
  public BOPTaxCostVersionListImpl(entity.BOPTaxCost base)  {
    super(base);
  }
  
  public BOPTaxCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPTaxCost AsOf(java.util.Date date) {
    return (entity.BOPTaxCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPTaxCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BOPTransaction bean) {
    addToArray(entity.BOPTaxCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTaxCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BOPTaxCost.TRANSACTIONS_PROP.get());
  }
  
  
}