package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineCovCost.eti;GLLineCovCost.eix;GLLineCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLLineCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLLineCovCostVersionList {
  public GLLineCovCostVersionListImpl(entity.GLLineCovCost base)  {
    super(base);
  }
  
  public GLLineCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLLineCovCost AsOf(java.util.Date date) {
    return (entity.GLLineCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLLineCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GLTransaction bean) {
    addToArray(entity.GLLineCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GLLineCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}