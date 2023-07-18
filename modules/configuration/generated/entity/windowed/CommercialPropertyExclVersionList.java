package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialPropertyExcl.eti;CommercialPropertyExcl.eix;CommercialPropertyExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CommercialPropertyExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CommercialPropertyExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CommercialPropertyExcl> getAllVersions();
  
  
  
}