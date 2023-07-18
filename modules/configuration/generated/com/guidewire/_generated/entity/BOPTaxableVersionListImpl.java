package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPTaxable.eti;BOPTaxable.eix;BOPTaxable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPTaxableVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPTaxableVersionList {
  public BOPTaxableVersionListImpl(entity.BOPTaxable base)  {
    super(base);
  }
  
  public BOPTaxableVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPTaxable AsOf(java.util.Date date) {
    return (entity.BOPTaxable)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPTaxable.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BOPTransaction bean) {
    addToArray(entity.BOPTaxable.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTaxable> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BOPTaxable.TRANSACTIONS_PROP.get());
  }
  
  
}