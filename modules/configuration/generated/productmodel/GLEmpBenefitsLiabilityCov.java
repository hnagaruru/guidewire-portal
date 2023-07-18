package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLEmpBenefitsLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLEmpBenefitsLiabilityCov extends entity.GeneralLiabilityCov {
  protected GLEmpBenefitsLiabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public GLEmpBenefitsLiabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "GLEmpBenefitsLiabilityCov");
  }
  
  public GLEmpBenefitsLiabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLEmpBenefitsLiabilityCov");
  }
  
  public productmodel.OptionGLEmpBenefitsAggLimitType getGLEmpBenefitsAggLimitTerm() {
    return (productmodel.OptionGLEmpBenefitsAggLimitType)getCovTerm("GLEmpBenefitsAggLimit");
  }
  
  public productmodel.OptionGLEmpBenefitsLiabDeductType getGLEmpBenefitsLiabDeductTerm() {
    return (productmodel.OptionGLEmpBenefitsLiabDeductType)getCovTerm("GLEmpBenefitsLiabDeduct");
  }
  
  public productmodel.GenericGLEmpBenefitsLiabilityCovRetroactiveDateType getGLEmpBenefitsLiabilityCovRetroactiveDateTerm() {
    return (productmodel.GenericGLEmpBenefitsLiabilityCovRetroactiveDateType)getCovTerm("GLEmpBenefitsLiabilityCovRetroactiveDate");
  }
  
  public productmodel.OptionGLEmpBenefitsPerEmpLimitType getGLEmpBenefitsPerEmpLimitTerm() {
    return (productmodel.OptionGLEmpBenefitsPerEmpLimitType)getCovTerm("GLEmpBenefitsPerEmpLimit");
  }
  
  public boolean getHasGLEmpBenefitsAggLimitTerm() {
    return hasCovTerm("GLEmpBenefitsAggLimit");
  }
  
  public boolean getHasGLEmpBenefitsLiabDeductTerm() {
    return hasCovTerm("GLEmpBenefitsLiabDeduct");
  }
  
  public boolean getHasGLEmpBenefitsLiabilityCovRetroactiveDateTerm() {
    return hasCovTerm("GLEmpBenefitsLiabilityCovRetroactiveDate");
  }
  
  public boolean getHasGLEmpBenefitsPerEmpLimitTerm() {
    return hasCovTerm("GLEmpBenefitsPerEmpLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GLEmpBenefitsLiabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLEmpBenefitsLiabilityCov>() {
      public productmodel.GLEmpBenefitsLiabilityCov newEmptyInstance() {
        return new productmodel.GLEmpBenefitsLiabilityCov();
      }
      
      
    });
  }
}