package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BASeasonTrailerLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BASeasonTrailerLiabCov extends entity.BusinessAutoCov {
  protected BASeasonTrailerLiabCov()  {
    super((java.lang.Void)null);
  }
  
  public BASeasonTrailerLiabCov(entity.PolicyPeriod branch)  {
    super(branch, "BASeasonTrailerLiabCov");
  }
  
  public BASeasonTrailerLiabCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BASeasonTrailerLiabCov");
  }
  
  public productmodel.DirectBASeasonTrailerLiabCountType getBASeasonTrailerLiabCountTerm() {
    return (productmodel.DirectBASeasonTrailerLiabCountType)getCovTerm("BASeasonTrailerLiabCount");
  }
  
  public productmodel.GenericBASeasonTrailerLiabEndDateType getBASeasonTrailerLiabEndDateTerm() {
    return (productmodel.GenericBASeasonTrailerLiabEndDateType)getCovTerm("BASeasonTrailerLiabEndDate");
  }
  
  public productmodel.DirectBASeasonTrailerLiabLimitType getBASeasonTrailerLiabLimitTerm() {
    return (productmodel.DirectBASeasonTrailerLiabLimitType)getCovTerm("BASeasonTrailerLiabLimit");
  }
  
  public productmodel.GenericBASeasonTrailerLiabProdTranspType getBASeasonTrailerLiabProdTranspTerm() {
    return (productmodel.GenericBASeasonTrailerLiabProdTranspType)getCovTerm("BASeasonTrailerLiabProdTransp");
  }
  
  public productmodel.GenericBASeasonTrailerLiabStartDateType getBASeasonTrailerLiabStartDateTerm() {
    return (productmodel.GenericBASeasonTrailerLiabStartDateType)getCovTerm("BASeasonTrailerLiabStartDate");
  }
  
  public productmodel.GenericBASeasonalTrailerLiabDescType getBASeasonalTrailerLiabDescTerm() {
    return (productmodel.GenericBASeasonalTrailerLiabDescType)getCovTerm("BASeasonalTrailerLiabDesc");
  }
  
  public boolean getHasBASeasonTrailerLiabCountTerm() {
    return hasCovTerm("BASeasonTrailerLiabCount");
  }
  
  public boolean getHasBASeasonTrailerLiabEndDateTerm() {
    return hasCovTerm("BASeasonTrailerLiabEndDate");
  }
  
  public boolean getHasBASeasonTrailerLiabLimitTerm() {
    return hasCovTerm("BASeasonTrailerLiabLimit");
  }
  
  public boolean getHasBASeasonTrailerLiabProdTranspTerm() {
    return hasCovTerm("BASeasonTrailerLiabProdTransp");
  }
  
  public boolean getHasBASeasonTrailerLiabStartDateTerm() {
    return hasCovTerm("BASeasonTrailerLiabStartDate");
  }
  
  public boolean getHasBASeasonalTrailerLiabDescTerm() {
    return hasCovTerm("BASeasonalTrailerLiabDesc");
  }
  
  static {
    com.guidewire._generated.productmodel.BASeasonTrailerLiabCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BASeasonTrailerLiabCov>() {
      public productmodel.BASeasonTrailerLiabCov newEmptyInstance() {
        return new productmodel.BASeasonTrailerLiabCov();
      }
      
      
    });
  }
}