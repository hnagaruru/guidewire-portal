package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLElectronicDataLiability.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLElectronicDataLiability extends entity.GeneralLiabilityCov {
  protected GLElectronicDataLiability()  {
    super((java.lang.Void)null);
  }
  
  public GLElectronicDataLiability(entity.PolicyPeriod branch)  {
    super(branch, "GLElectronicDataLiability");
  }
  
  public GLElectronicDataLiability(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLElectronicDataLiability");
  }
  
  public productmodel.DirectGLElectronicDataLimitType getGLElectronicDataLimitTerm() {
    return (productmodel.DirectGLElectronicDataLimitType)getCovTerm("GLElectronicDataLimit");
  }
  
  public boolean getHasGLElectronicDataLimitTerm() {
    return hasCovTerm("GLElectronicDataLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GLElectronicDataLiabilityInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLElectronicDataLiability>() {
      public productmodel.GLElectronicDataLiability newEmptyInstance() {
        return new productmodel.GLElectronicDataLiability();
      }
      
      
    });
  }
}