package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EffectiveDatedFields.eti;EffectiveDatedFields.eix;EffectiveDatedFields.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface EffectiveDatedFieldsVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.EffectiveDatedFields AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ProductModifier> ProductModifiersAsOf(java.util.Date date);
  
  
  void addToProductModifiers(entity.ProductModifier bean);
  
  
  java.util.List<? extends entity.EffectiveDatedFields> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.ProductModifierVersionList> getProductModifiers();
  
  
  
}