package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDTransaction.eti;APDTransaction.eix;APDTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDTransactionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDTransactionVersionList {
  public APDTransactionVersionListImpl(entity.APDTransaction base)  {
    super(base);
  }
  
  public APDTransactionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDTransaction AsOf(java.util.Date date) {
    return (entity.APDTransaction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDTransaction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}