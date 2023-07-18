package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLCGLCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLCGLCov extends entity.GeneralLiabilityCov {
  protected GLCGLCov()  {
    super((java.lang.Void)null);
  }
  
  public GLCGLCov(entity.PolicyPeriod branch)  {
    super(branch, "GLCGLCov");
  }
  
  public GLCGLCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLCGLCov");
  }
  
  public productmodel.OptionCGLProdCompOpBIAggType getCGLProdCompOpBIAggTerm() {
    return (productmodel.OptionCGLProdCompOpBIAggType)getCovTerm("CGLProdCompOpBIAgg");
  }
  
  public productmodel.OptionCGLProdCompOpsPDAggType getCGLProdCompOpsPDAggTerm() {
    return (productmodel.OptionCGLProdCompOpsPDAggType)getCovTerm("CGLProdCompOpsPDAgg");
  }
  
  public productmodel.OptionCGLProductsAggLimType getCGLProductsAggLimTerm() {
    return (productmodel.OptionCGLProductsAggLimType)getCovTerm("CGLProductsAggLim");
  }
  
  public productmodel.OptionGLCGLAggLimitType getGLCGLAggLimitTerm() {
    return (productmodel.OptionGLCGLAggLimitType)getCovTerm("GLCGLAggLimit");
  }
  
  public productmodel.OptionGLCGLBIAggLimitType getGLCGLBIAggLimitTerm() {
    return (productmodel.OptionGLCGLBIAggLimitType)getCovTerm("GLCGLBIAggLimit");
  }
  
  public productmodel.OptionGLCGLBILimitType getGLCGLBILimitTerm() {
    return (productmodel.OptionGLCGLBILimitType)getCovTerm("GLCGLBILimit");
  }
  
  public productmodel.OptionGLCGLMedPayLimitType getGLCGLMedPayLimitTerm() {
    return (productmodel.OptionGLCGLMedPayLimitType)getCovTerm("GLCGLMedPayLimit");
  }
  
  public productmodel.OptionGLCGLOccLimitType getGLCGLOccLimitTerm() {
    return (productmodel.OptionGLCGLOccLimitType)getCovTerm("GLCGLOccLimit");
  }
  
  public productmodel.OptionGLCGLPDAggLimitType getGLCGLPDAggLimitTerm() {
    return (productmodel.OptionGLCGLPDAggLimitType)getCovTerm("GLCGLPDAggLimit");
  }
  
  public productmodel.OptionGLCGLPDLimitType getGLCGLPDLimitTerm() {
    return (productmodel.OptionGLCGLPDLimitType)getCovTerm("GLCGLPDLimit");
  }
  
  public productmodel.OptionGLCGLPersAdLimitType getGLCGLPersAdLimitTerm() {
    return (productmodel.OptionGLCGLPersAdLimitType)getCovTerm("GLCGLPersAdLimit");
  }
  
  public productmodel.OptionGLCGLRentedPropLimitType getGLCGLRentedPropLimitTerm() {
    return (productmodel.OptionGLCGLRentedPropLimitType)getCovTerm("GLCGLRentedPropLimit");
  }
  
  public boolean getHasCGLProdCompOpBIAggTerm() {
    return hasCovTerm("CGLProdCompOpBIAgg");
  }
  
  public boolean getHasCGLProdCompOpsPDAggTerm() {
    return hasCovTerm("CGLProdCompOpsPDAgg");
  }
  
  public boolean getHasCGLProductsAggLimTerm() {
    return hasCovTerm("CGLProductsAggLim");
  }
  
  public boolean getHasGLCGLAggLimitTerm() {
    return hasCovTerm("GLCGLAggLimit");
  }
  
  public boolean getHasGLCGLBIAggLimitTerm() {
    return hasCovTerm("GLCGLBIAggLimit");
  }
  
  public boolean getHasGLCGLBILimitTerm() {
    return hasCovTerm("GLCGLBILimit");
  }
  
  public boolean getHasGLCGLMedPayLimitTerm() {
    return hasCovTerm("GLCGLMedPayLimit");
  }
  
  public boolean getHasGLCGLOccLimitTerm() {
    return hasCovTerm("GLCGLOccLimit");
  }
  
  public boolean getHasGLCGLPDAggLimitTerm() {
    return hasCovTerm("GLCGLPDAggLimit");
  }
  
  public boolean getHasGLCGLPDLimitTerm() {
    return hasCovTerm("GLCGLPDLimit");
  }
  
  public boolean getHasGLCGLPersAdLimitTerm() {
    return hasCovTerm("GLCGLPersAdLimit");
  }
  
  public boolean getHasGLCGLRentedPropLimitTerm() {
    return hasCovTerm("GLCGLRentedPropLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GLCGLCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLCGLCov>() {
      public productmodel.GLCGLCov newEmptyInstance() {
        return new productmodel.GLCGLCov();
      }
      
      
    });
  }
}