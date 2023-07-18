package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCovCost.eti;GLCovCost.eix;GLCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLCovCostVersionList {
  public GLCovCostVersionListImpl(entity.GLCovCost base)  {
    super(base);
  }
  
  public GLCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLCovCost AsOf(java.util.Date date) {
    return (entity.GLCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GLTransaction bean) {
    addToArray(entity.GLCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GLCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}