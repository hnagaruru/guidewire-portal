package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCost.eti;GLCost.eix;GLCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLCostVersionList {
  public GLCostVersionListImpl(entity.GLCost base)  {
    super(base);
  }
  
  public GLCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLCost AsOf(java.util.Date date) {
    return (entity.GLCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GLTransaction bean) {
    addToArray(entity.GLCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GLCost.TRANSACTIONS_PROP.get());
  }
  
  
}