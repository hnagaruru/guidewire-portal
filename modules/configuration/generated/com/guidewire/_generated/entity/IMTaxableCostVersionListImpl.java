package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMTaxableCost.eti;IMTaxableCost.eix;IMTaxableCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMTaxableCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMTaxableCostVersionList {
  public IMTaxableCostVersionListImpl(entity.IMTaxableCost base)  {
    super(base);
  }
  
  public IMTaxableCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMTaxableCost AsOf(java.util.Date date) {
    return (entity.IMTaxableCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMTaxableCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.IMTransaction bean) {
    addToArray(entity.IMTaxableCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTaxableCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.IMTaxableCost.TRANSACTIONS_PROP.get());
  }
  
  
}