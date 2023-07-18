package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingNonPerilCovCost.eti;HOPDwellingNonPerilCovCost.eix;HOPDwellingNonPerilCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingNonPerilCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingNonPerilCovCostVersionList {
  public HOPDwellingNonPerilCovCostVersionListImpl(entity.HOPDwellingNonPerilCovCost base)  {
    super(base);
  }
  
  public HOPDwellingNonPerilCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingNonPerilCovCost AsOf(java.util.Date date) {
    return (entity.HOPDwellingNonPerilCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingNonPerilCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.HOPTransaction bean) {
    addToArray(entity.HOPDwellingNonPerilCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingNonPerilCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.HOPDwellingNonPerilCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}