package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPAddnlInsuredCost.eti;BOPAddnlInsuredCost.eix;BOPAddnlInsuredCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPAddnlInsuredCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPAddnlInsuredCostVersionList {
  public BOPAddnlInsuredCostVersionListImpl(entity.BOPAddnlInsuredCost base)  {
    super(base);
  }
  
  public BOPAddnlInsuredCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPAddnlInsuredCost AsOf(java.util.Date date) {
    return (entity.BOPAddnlInsuredCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPAddnlInsuredCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BOPTransaction bean) {
    addToArray(entity.BOPAddnlInsuredCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPAddnlInsuredCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BOPAddnlInsuredCost.TRANSACTIONS_PROP.get());
  }
  
  
}