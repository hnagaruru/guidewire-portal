package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBlanketCov.eti;CPBlanketCov.eix;CPBlanketCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPBlanketCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPBlanketCovVersionList {
  public CPBlanketCovVersionListImpl(entity.CPBlanketCov base)  {
    super(base);
  }
  
  public CPBlanketCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPBlanketCov AsOf(java.util.Date date) {
    return (entity.CPBlanketCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBlanketCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}