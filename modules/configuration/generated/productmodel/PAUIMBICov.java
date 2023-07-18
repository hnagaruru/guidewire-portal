package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUIMBICov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAUIMBICov extends entity.PersonalAutoCov {
  protected PAUIMBICov()  {
    super((java.lang.Void)null);
  }
  
  public PAUIMBICov(entity.PolicyPeriod branch)  {
    super(branch, "PAUIMBICov");
  }
  
  public PAUIMBICov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAUIMBICov");
  }
  
  public boolean getHasPAUIMBITerm() {
    return hasCovTerm("PAUIMBI");
  }
  
  public boolean getHasPAUIMBIstackedTerm() {
    return hasCovTerm("PAUIMBIstacked");
  }
  
  public productmodel.PackagePAUIMBIType getPAUIMBITerm() {
    return (productmodel.PackagePAUIMBIType)getCovTerm("PAUIMBI");
  }
  
  public productmodel.GenericPAUIMBIstackedType getPAUIMBIstackedTerm() {
    return (productmodel.GenericPAUIMBIstackedType)getCovTerm("PAUIMBIstacked");
  }
  
  static {
    com.guidewire._generated.productmodel.PAUIMBICovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAUIMBICov>() {
      public productmodel.PAUIMBICov newEmptyInstance() {
        return new productmodel.PAUIMBICov();
      }
      
      
    });
  }
}