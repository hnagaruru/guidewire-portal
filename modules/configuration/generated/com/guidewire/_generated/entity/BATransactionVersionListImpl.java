package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BATransaction.eti;BATransaction.eix;BATransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BATransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BATransactionVersionList {
  public BATransactionVersionListImpl(entity.BATransaction base)  {
    super(base);
  }
  
  public BATransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BATransaction AsOf(java.util.Date date) {
    return (entity.BATransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}