package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPLimitedFungusAndMold.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPLimitedFungusAndMold extends entity.HOPDwellingCov {
  protected HOPLimitedFungusAndMold()  {
    super((java.lang.Void)null);
  }
  
  public HOPLimitedFungusAndMold(entity.PolicyPeriod branch)  {
    super(branch, "z6phevqrmj0r38hvvhtbk7pimv8");
  }
  
  public HOPLimitedFungusAndMold(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z6phevqrmj0r38hvvhtbk7pimv8");
  }
  
  public productmodel.OptionHOPLimitedFungusAndMoldLimitType getHOPLimitedFungusAndMoldLimitTerm() {
    return (productmodel.OptionHOPLimitedFungusAndMoldLimitType)getCovTerm("zv3g6aos8sp4iarh5nbmo5cfer8");
  }
  
  public boolean getHasHOPLimitedFungusAndMoldLimitTerm() {
    return hasCovTerm("zv3g6aos8sp4iarh5nbmo5cfer8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPLimitedFungusAndMoldInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPLimitedFungusAndMold>() {
      public productmodel.HOPLimitedFungusAndMold newEmptyInstance() {
        return new productmodel.HOPLimitedFungusAndMold();
      }
      
      
    });
  }
}