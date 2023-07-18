package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPTransaction.eti;CPTransaction.eix;CPTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPTransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPTransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPTransaction> getAllVersions();
  
  
  
}