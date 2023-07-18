package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BANonOwnedBasis.eti;BANonOwnedBasis.eix;BANonOwnedBasis.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BANonOwnedBasisVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BANonOwnedBasis AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BANonOwnedBasis> getAllVersions();
  
  
  
}