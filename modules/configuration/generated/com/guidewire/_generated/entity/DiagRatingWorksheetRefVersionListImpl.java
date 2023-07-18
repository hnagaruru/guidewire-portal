package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DiagRatingWorksheetRef.eti;DiagRatingWorksheetRef.eix;DiagRatingWorksheetRef.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class DiagRatingWorksheetRefVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.DiagRatingWorksheetRefVersionList {
  public DiagRatingWorksheetRefVersionListImpl(entity.DiagRatingWorksheetRef base)  {
    super(base);
  }
  
  public DiagRatingWorksheetRefVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.DiagRatingWorksheetRef AsOf(java.util.Date date) {
    return (entity.DiagRatingWorksheetRef)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagRatingWorksheetRef> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}