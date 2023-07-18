package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLAddlInsuredCost.eti;GLAddlInsuredCost.eix;GLAddlInsuredCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLAddlInsuredCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLAddlInsuredCostVersionList {
  public GLAddlInsuredCostVersionListImpl(entity.GLAddlInsuredCost base)  {
    super(base);
  }
  
  public GLAddlInsuredCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLAddlInsuredCost AsOf(java.util.Date date) {
    return (entity.GLAddlInsuredCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLAddlInsuredCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.GLTransaction bean) {
    addToArray(entity.GLAddlInsuredCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLAddlInsuredCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.GLAddlInsuredCost.TRANSACTIONS_PROP.get());
  }
  
  
}