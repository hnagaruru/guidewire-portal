package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPTransaction.eti;BOPTransaction.eix;BOPTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPTransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BOPTransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPTransaction> getAllVersions();
  
  
  
}