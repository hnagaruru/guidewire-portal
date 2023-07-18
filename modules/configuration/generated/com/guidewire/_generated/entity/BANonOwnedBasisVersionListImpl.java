package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BANonOwnedBasis.eti;BANonOwnedBasis.eix;BANonOwnedBasis.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BANonOwnedBasisVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BANonOwnedBasisVersionList {
  public BANonOwnedBasisVersionListImpl(entity.BANonOwnedBasis base)  {
    super(base);
  }
  
  public BANonOwnedBasisVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BANonOwnedBasis AsOf(java.util.Date date) {
    return (entity.BANonOwnedBasis)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BANonOwnedBasis> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}