package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUMBICov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAUMBICov extends entity.PersonalAutoCov {
  protected PAUMBICov()  {
    super((java.lang.Void)null);
  }
  
  public PAUMBICov(entity.PolicyPeriod branch)  {
    super(branch, "PAUMBICov");
  }
  
  public PAUMBICov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAUMBICov");
  }
  
  public boolean getHasPAUMBIIncludeUIMTerm() {
    return hasCovTerm("PAUMBIIncludeUIM");
  }
  
  public boolean getHasPAUMBITerm() {
    return hasCovTerm("PAUMBI");
  }
  
  public boolean getHasPAUMBIstackedTerm() {
    return hasCovTerm("PAUMBIstacked");
  }
  
  public productmodel.GenericPAUMBIIncludeUIMType getPAUMBIIncludeUIMTerm() {
    return (productmodel.GenericPAUMBIIncludeUIMType)getCovTerm("PAUMBIIncludeUIM");
  }
  
  public productmodel.PackagePAUMBIType getPAUMBITerm() {
    return (productmodel.PackagePAUMBIType)getCovTerm("PAUMBI");
  }
  
  public productmodel.GenericPAUMBIstackedType getPAUMBIstackedTerm() {
    return (productmodel.GenericPAUMBIstackedType)getCovTerm("PAUMBIstacked");
  }
  
  static {
    com.guidewire._generated.productmodel.PAUMBICovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAUMBICov>() {
      public productmodel.PAUMBICov newEmptyInstance() {
        return new productmodel.PAUMBICov();
      }
      
      
    });
  }
}