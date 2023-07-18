package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMoneySecCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPMoneySecCov extends entity.BOPLocationCov {
  protected BOPMoneySecCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPMoneySecCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPMoneySecCov");
  }
  
  public BOPMoneySecCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPMoneySecCov");
  }
  
  public productmodel.OptionBOPMoneyOffPremLimType getBOPMoneyOffPremLimTerm() {
    return (productmodel.OptionBOPMoneyOffPremLimType)getCovTerm("BOPMoneyOffPremLim");
  }
  
  public productmodel.DirectBOPMoneyOnPremLimType getBOPMoneyOnPremLimTerm() {
    return (productmodel.DirectBOPMoneyOnPremLimType)getCovTerm("BOPMoneyOnPremLim");
  }
  
  public boolean getHasBOPMoneyOffPremLimTerm() {
    return hasCovTerm("BOPMoneyOffPremLim");
  }
  
  public boolean getHasBOPMoneyOnPremLimTerm() {
    return hasCovTerm("BOPMoneyOnPremLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPMoneySecCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPMoneySecCov>() {
      public productmodel.BOPMoneySecCov newEmptyInstance() {
        return new productmodel.BOPMoneySecCov();
      }
      
      
    });
  }
}