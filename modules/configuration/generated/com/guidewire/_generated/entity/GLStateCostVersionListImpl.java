package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLStateCost.eti;GLStateCost.eix;GLStateCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLStateCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLStateCostVersionList {
  public GLStateCostVersionListImpl(entity.GLStateCost base)  {
    super(base);
  }
  
  public GLStateCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLStateCost AsOf(java.util.Date date) {
    return (entity.GLStateCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLStateCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GLTransaction bean) {
    addToArray(entity.GLStateCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLStateCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GLStateCost.TRANSACTIONS_PROP.get());
  }
  
  
}