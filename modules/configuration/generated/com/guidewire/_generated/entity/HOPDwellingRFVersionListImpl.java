package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingRF.eti;HOPDwellingRF.eix;HOPDwellingRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingRFVersionList {
  public HOPDwellingRFVersionListImpl(entity.HOPDwellingRF base)  {
    super(base);
  }
  
  public HOPDwellingRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingRF AsOf(java.util.Date date) {
    return (entity.HOPDwellingRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}