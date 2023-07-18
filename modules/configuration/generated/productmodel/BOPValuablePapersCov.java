package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPValuablePapersCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPValuablePapersCov extends entity.BOPBuildingCov {
  protected BOPValuablePapersCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPValuablePapersCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPValuablePapersCov");
  }
  
  public BOPValuablePapersCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPValuablePapersCov");
  }
  
  public productmodel.DirectBOPValPaperOnPremLimType getBOPValPaperOnPremLimTerm() {
    return (productmodel.DirectBOPValPaperOnPremLimType)getCovTerm("BOPValPaperOnPremLim");
  }
  
  public productmodel.OptionBOPValPapersOffPremLimitType getBOPValPapersOffPremLimitTerm() {
    return (productmodel.OptionBOPValPapersOffPremLimitType)getCovTerm("BOPValPapersOffPremLimit");
  }
  
  public boolean getHasBOPValPaperOnPremLimTerm() {
    return hasCovTerm("BOPValPaperOnPremLim");
  }
  
  public boolean getHasBOPValPapersOffPremLimitTerm() {
    return hasCovTerm("BOPValPapersOffPremLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPValuablePapersCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPValuablePapersCov>() {
      public productmodel.BOPValuablePapersCov newEmptyInstance() {
        return new productmodel.BOPValuablePapersCov();
      }
      
      
    });
  }
}